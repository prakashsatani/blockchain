import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NewsblogService } from '../news-blog/news-blog.service';
declare var $: any;

import emojiCompact from '../../../../node_modules/emoji.json/emoji-compact.json';

@Component({
	selector: 'app-news-blog-preview',
	templateUrl: './news-blog-preview.component.html',
	styleUrls: ['./news-blog-preview.component.css']
})

export class NewsBlogPreviewComponent implements OnInit {
	newsBlogId: any = '';
  newsBlogKey: any = '';
	newsBlogData: any = '';
	commentForm: any = '';
	commentData: any = '';
	emojiData: any = '';
	baseUrl: any = environment.BASE_URL;
	jpgType: any = "image/jpeg";
	pngType: any = "image/png";
	constructor(private newsBlogService: NewsblogService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private fb: FormBuilder) {
		route.params.subscribe(
			(params) => {
        this.newsBlogKey = params['id'];
				// console.log(params['id']);
			});
		this.commentForm = this.fb.group({
			comment: '',
		})
	}

	public scrollToTop() {
		$(window).scrollTop(0);
	}

	ngOnInit(): void {
		this.scrollToTop();
		this.emojiData = emojiCompact
		this.fetchNewsBlog();
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
		//this.fetchAllCommentOfPost();
	}


	removeHTML(str: any) {
		if (str != undefined) {
			var plainText = str.replace(/<[^>]*>/g, '');
			return plainText;
		}
	}

	updateBlogView(count: any, resData: any) {
		var viewCount = (count + 1);
		var data = {
			id: this.newsBlogId,
			view: viewCount
		}
		this.newsBlogService.updateBlogView(data).subscribe(
			response => {
				$('[id*=carousel-item-]').removeClass('active');
				$('#carousel-item-0').addClass('active');
			},
			err => {
			}
		);
	}


	publishComment() {
		var data = {
			post_id: this.newsBlogId,
			comment: this.commentForm.value.comment,
			email: '',
			post_cmnt: this.newsBlogData.comments
		}
		this.newsBlogService.publishComment(data).subscribe(
			response => {
				this.commentForm.controls['comment'].setValue('');
				this.fetchAllCommentOfPost();
			},
			err => {
			}
		);
	}


	fetchAllCommentOfPost() {
		this.newsBlogService.fetchAllCommentOfPost(this.newsBlogId).subscribe(
			response => {
				this.commentData = response.data;
			},
			err => {

			}
		);
	}


	likeUnlikeBlog(blogId: any, count: any) {
		if ($('#likeUnlikeBlogId_' + blogId).hasClass('bi bi-heart')) {
			$('#likeUnlikeBlogId_' + blogId).removeClass("bi bi-heart");
			$('#likeUnlikeBlogId_' + blogId).addClass("bi bi-heart-fill");
			var likeCount = (count == null ? 0 : count);
			likeCount = likeCount + 1;
		} else {
			$('#likeUnlikeBlogId_' + blogId).removeClass("bi bi-heart-fill");
			$('#likeUnlikeBlogId_' + blogId).addClass("bi bi-heart");
			var likeCount = $('#likeUnlikeBlog_' + blogId).text();
			if (likeCount == 0) {
				likeCount = likeCount;
			} else {
				likeCount = likeCount - 1;
			}
		}
		var data = {
			id: blogId,
			like: likeCount
		}
		this.newsBlogService.likeUnlikeBlog(data).subscribe(
			response => {
				if (response.success) {
					$('#likeUnlikeBlog_' + blogId).text(likeCount);
				}
			},
			err => {
			}
		);
	}

	fetchNewsBlog() {
    var data = {
      key: this.newsBlogKey
    }
    this.newsBlogService.fetchNewsBlog(data).subscribe(
			response => {
				this.newsBlogData = response.data;
        this.newsBlogId = this.newsBlogData._id;
				this.updateBlogView(this.newsBlogData.view, this.newsBlogData.file);
        this.fetchAllCommentOfPost()
			},
			err => {

			}
		);
	}

  sanitizeHtml(value:any) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
	sanitizeUrl(url:any){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}
