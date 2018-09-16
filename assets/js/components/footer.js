import articles from '../data/articles.js';

const { format, parse } = dateFns;

const recent = articles
  .sort((a, b) => parse(a.date) < parse(b.date))
  .slice(0, 5)
  .map(article => {
    return {
      ...article,
      month: format(article.date, 'MMM'),
      day: format(article.date, 'D')
    };
  });

new Vue({
  el: '#footer',
  data: { recent },
  template: `
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-12-medium">
            <section>
              <header>
                <h2>Recent articles</h2>
              </header>

              <ul class="dates">
                <li v-for="article in recent">
                  <span class="date">{{article.month}} <strong>{{article.day}}</strong></span>
                  <h3><a :href="'/articles/' + article.page">{{article.title}}</a></h3>
                  <p>{{article.blurb}}</p>
                </li>
              </ul>

              <a href="/articles/index.html">View all</a>
            </section>
          </div>

          <div class="col-8 col-12-medium">
            <section>
              <span class="image featured"><img src="/images/footer.jpg" /></span>
              <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@bentonwitch?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Photo by Benton Witcher"><span style="display:inline-block;padding:2px 3px"><svg xmlns="https://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Benton Witcher</span></a>
            </section>
          </div>

          <div class="col-4 col-12-medium">
            <section>
              <header>
                <h2>About</h2>
              </header>

              <p>
                DigiNews DFW is an online news source, founded in September 2018, that covers technology, startup,
                and business topics across Dallas-Fort Worth. Its mission is to inform the community by providing
                timely and thought-provoking stories while adhering to the Society of Professional Journalists'
                Code of Ethics. It was founded and is led by Danielle Abril, a journalist who has covered the region
                for more than 10 years with news organizations including The Dallas Morning News, Dallas Business Journal,
                and D CEO magazine, where she served as managing editor.
              </p>

              <ul class="social">
                <li><a class="icon fa-twitter" href="https://twitter.com/danielledigest" target="_blank"><span class="label">Twitter</span></a></li>
                <li><a class="icon fa-linkedin" href="https://www.linkedin.com/in/danielle-abril" target="_blank"><span class="label">LinkedIn</span></a></li>
              </ul>

              <ul class="contact">
                <li>
                  <h3>Mail</h3>
                  <p><a href="mailto:">danielle.m.abril@gmail.com</a></p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  `
});
