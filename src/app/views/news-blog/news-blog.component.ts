import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { NewsblogService } from './news-blog.service';
declare var $: any;

@Component({
	selector: 'app-news-blog',
	templateUrl: './news-blog.component.html',
	styleUrls: ['./news-blog.component.css']
})
export class NewsBlogComponent implements OnInit {
	filterTerm: string = '';
  constructor(private newsBlogService: NewsblogService, private sanitizer: DomSanitizer,
    private title: Title,
    private meta: Meta
  ) { }

	allNewsBlog: any = [];
	searchText: any = '';
	iconNumber: number = 11;
	baseUrl: any = environment.BASE_URL;
	public scrollToTop() {
		$(window).scrollTop(0);
	}
	ngOnInit(): void {
    this.title.setTitle('News & Blogs | BlockchainMind');
    this.meta.updateTag({ name: 'description', content: 'Latest news on Blockchian, Cryptocurrency, Bitcoin, Ethereum, Binance Smart Chain, Polygon (Matic) , Solana' });
		this.scrollToTop();
		this.allPosts();
		$(".navbar").addClass("bg-navbar");
		$(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
	}

	removeHTML(str: any) {
		var plainText = str.replace(/<[^>]*>/g, '');
		return plainText;
	}

	allPosts() {
		this.getNewsBlog();
	}

	wallets(type: any) {
		this.newsBlogService.getWallet(type).subscribe(
			response => {
				this.allNewsBlog = response.data;
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

	getNewsBlog() {
		this.newsBlogService.getNewsBlogs().subscribe(
			response => {
				this.allNewsBlog = response.data;
			},
			err => {

			}
		);
	}

	newsBlogSearch() {
		// var data = $('#searchpost').val();
		// console.log(data);
		// console.log(123);
		// data.replace(' ', '+');
		// console.log(data);
		// this.newsBlogService.newsBlogSearch(data).subscribe(
		// 	data => {
		// 	},
		// 	err => {

		// 	}
		// );
	}
	sanitizeHtml(value:any) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
	sanitizeUrl(url:any){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

}
