import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Router, RouterModule, CanActivate } from '@angular/router';
import { AppHttpService } from 'src/app/_helpers/app-http.service';

@Injectable({
	providedIn: 'root'
})

export class NewsblogService {

	constructor(private http: HttpClient, public router: Router, private httpService: AppHttpService) {

	}

	getNewsBlogs(): Observable<any> {
		return this.httpService.get('news-blog/getNewsBlogs');
	}

	getWallet(type: any): Observable<any> {
		return this.httpService.get('news-blog/getWallet/' + type);
	}

  fetchNewsBlog(data: any): Observable<any> {
		return this.httpService.post('news-blog/fetchNewsBlogByKey/',  data);
	}

	newsBlogSearch(q: any): Observable<any> {
		return this.httpService.get('news-blog/newsBlogSearch', q);
	}

	updateBlogView(data: any): Observable<any> {
		return this.httpService.post('news-blog/updateBlogView', data);
	}

	publishComment(data: any): Observable<any> {
		return this.httpService.post('news-blog/publishComment', data);
	}

	fetchAllCommentOfPost(id: any): Observable<any> {
		return this.httpService.get('news-blog/fetchAllCommentOfPost/' + id);
	}

	likeUnlikeBlog(data: any): Observable<any> {
		return this.httpService.post('news-blog/likeUnlikeBlog', data);
	}


}
