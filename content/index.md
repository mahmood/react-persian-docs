---
layout: hero
title: A JavaScript library for building user interfaces
id: home
---

<section class="light home-section">
  <div class="marketing-row">
    <div class="marketing-col">
      <h3>اعلانی</h3>
      <p>با ری‌اکت بدون دردسر رابط کاربری تعاملی بسازید. ویوو های ساده برای هر استیت برنامه خود طراحی کنید، و ری‌اکت بطور موثر با تغییر داده ها کامپوننت های شما را آپدیت و رندر می‌نمایید.</p>
      <p>ویوو های اعلانی باعث قابل پیش بینی شدن کد شما شده و اشکال زدایی را آسان می‌کند.</p>
    </div>
    <div class="marketing-col">
      <h3>براساس کامپوننت</h3>
      <p>کامپوننت های کپسوله سازی شده بسازید که هر کدام استیت خودشان را کنترل می‌کنند و همچنین آنها را ترکیب کنید و رابط کاربری پیچیده تری بسازید.</p>
      <p>از آنجاییکه منطق کامپوننت به جای تمپلیت بوسیله جاوااسکریپت نوشته شده است  شما میتوانید به آسانی داده های خود را به برنامه خود بدهید و استیت برنامه را به دور از dom نگه دارید.</p>
    </div>
    <div class="marketing-col">
      <h3>یک بار یاد بگیرید همه‌جا بنویسید</h3>
      <p>ما به استک تکنولوژی برنامه شما کاری نداریم، بنابراین شما می‌توانید قابلیت های جدید را بدون نیاز به دوباره نویسی کد در ری‌اکت توسعه دهید </p>
      <p>ری‌اکت همچنین می‌تواند در سمت سرور به وسیله ند رندر شود و همچنین قدرت اپ های موبایل باشد به وسیله<a href="https://facebook.github.io/react-native/">ری‌اکت نیتیو</a>.</p>
    </div>
  </div>
</section>
<hr class="home-divider" />
<section class="home-section">
  <div id="examples">
    <div class="example">
      <h3>یک کامپوننت ساده</h3>
      <p>کامپوننت های ری‌اکت متد رندر را پیاده سازی می‌کنند که آن داده های ورودی را دریافت کرده و خروجی را نمایش می‌دهد. این مثال از نحوه نشتن کد شبیه به xml استفاده می‌کند که JSX نام دارد. داده های ورودی پاس داده شده به کامپوننت توسط this.props قابل دسترسی می‌باشند.</p>
      <p>
        <strong>استفاده از JSX اختیاری بوده و الزامی نمی‌باشد.</strong>
        <!-- Try the
        <a href="http://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&code_lz=MYGwhgzhAEASCmIQHsCy8pgOb2vAHgC7wB2AJjAErxjCEB0AwsgLYAOyJph0A3gFABIAE6ky8YQAoAlHyEj4hAK7CS0ADxkAlgDcAfAiTI-hABZaI9NsORtLJMC3gBfdQHpt-gNxDn_P_zUtIQAIgDyqPSi5BKS6oYo6Jg40A5OALwARCHwOlokmdBuegA00CzISiSEAHLI4tJeQA&debug=false&circleciRepo=&evaluate=false&lineWrap=false&presets=react&prettier=true&targets=&version=6.26.0">Babel REPL</a>
        to see the raw JavaScript code produced by the JSX compilation step. -->
      </p>
      <div id="helloExample"></div>
    </div>
    <div class="example">
      <h3>کامپوننت دارای استیت</h3>
      <p>علاوه بر این که داده ها می‌توانند دریافت شوند(از طریق this.props) کامپوننت همچنین می‌تواند از استیت داخلی خود نگه داری کند(که از طریق this.state) قابل دسترسی می‌باشد.
      وقتی استیت کامپوننت تغییر می‌کند مارک‌اپ رندر شده با دوباره فراخوانی شدن متد render آپدیت می‌شود.</p>
      <div id="timerExample"></div>
    </div>
    <div class="example">
      <h3>یک برنامه کاربردی</h3>
      <p>به وسیله props و state ما می‌توانیم آنها را باهم ترکیب کرده تا یک برنامه todo ساده بسازیم.
      در این مثال از state برای نگهداری لیست آیتم هایی که کاربر وارد کرده است استفاده ‌می‌کنیم.
      با اینکه هندل کننده های رویداد به صورت inline به نظر می‌رسد ولی آنها جمع آوری شده و پیاده سازی شده اند به وسیله تکنیک Event Delegation.
      </p>
      <div id="todoExample"></div>
    </div>
    <div class="example">
      <h3>یک کامپوننت  با استفاده از افزونه خارجی</h3>
      <p>ری‌اکت انعطاف پذیر می‌باشد و یک هوک فراهم کرده است که اجازه می‌دهد شما با دیگر فریم‌ورک ها و لایبرری ها کارکنید. این مثال از <strong>remarkable</strong> که یک لایبرری مارک‌داون می‌باشد استفاده می‌کند برای تغییر مقدار textarea بصورت ریل تایم.</p>
      <div id="markdownExample"></div>
    </div>
  </div>
</section>
