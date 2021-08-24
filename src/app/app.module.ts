import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TimeAgoPipe} from 'time-ago-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightBestQuoteDirective } from './highlight-best-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    DateCountPipe,
    StrikethroughDirective,
    TimeAgoPipe,
    QuoteFormComponent,
    HighlightBestQuoteDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
