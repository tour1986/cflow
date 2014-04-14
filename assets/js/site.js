(function() {
  var lambda_urls, possible_queries;

  possible_queries = [
    '<div class="highlight"><pre><code class="javascript"><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;swallows&#39;</span><span class="p">).</span><span class="nx">filter</span><span class="p">({</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;unladen&#39;</span><span class="p">,</span> <span class="nx">origin</span><span class="o">:</span> <span class="s1">&#39;African&#39;</span> <span class="p">}).</span><span class="nx">pluck</span><span class="p">(</span><span class="s1">&#39;velocity&#39;</span><span class="p">).</span><span class="nx">run</span><span class="p">()</span>\
</code></pre></div>', '<div class="highlight"><pre><code class="javascript"><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;licks_to_center&#39;</span><span class="p">).</span><span class="nx">eqJoin</span><span class="p">(</span><span class="s1">&#39;lollipop_id&#39;</span><span class="p">,</span> <span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;tootsie_pops&#39;</span><span class="p">)).</span><span class="nx">run</span><span class="p">()</span>\
</code></pre></div>', '<div class="highlight"><pre><code class="javascript"><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;bottles_of_beer_on_the_wall&#39;</span><span class="p">).</span><span class="nx">count</span><span class="p">().</span><span class="nx">run</span><span class="p">()</span>\
</code></pre></div>', '<div class="highlight"><pre><code class="javascript"><span class="nx">r</span><span class="p">.</span><span class="nx">db</span><span class="p">(</span><span class="s1">&#39;Disney&#39;</span><span class="p">).</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;StarWars&#39;</span><span class="p">).</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;Luke&#39;</span><span class="p">).</span><span class="nx">update</span><span class="p">({</span><span class="s1">&#39;father&#39;</span><span class="o">:</span> <span class="s1">&#39;Vader&#39;</span><span class="p">}).</span><span class="nx">run</span><span class="p">()</span>\
</code></pre></div>', '<div class="highlight"><pre><code class="javascript"><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;FairVerona&#39;</span><span class="p">).</span><span class="nx">insert</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;Montagues&#39;</span><span class="p">).</span><span class="nx">union</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;Capulets&#39;</span><span class="p">))).</span><span class="nx">run</span><span class="p">()</span>\
</code></pre></div>', '<div class="highlight"><pre><code class="javascript"><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;states&#39;</span><span class="p">).</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;Denmark&#39;</span><span class="p">).</span><span class="nx">update</span><span class="p">({</span> <span class="nx">situation</span><span class="o">:</span> <span class="s1">&#39;rotten&#39;</span> <span class="p">}).</span><span class="nx">run</span><span class="p">()</span>\
</code></pre></div>', '<div class="highlight"><pre><code class="javascript"><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;students&#39;</span><span class="p">).</span><span class="nx">insert</span><span class="p">({</span><span class="s1">&#39;name&#39;</span><span class="o">:</span><span class="s2">&quot;Robert&#39;); DROP TABLE Students;--&quot;</span><span class="p">,</span> <span class="s1">&#39;nickname&#39;</span><span class="o">:</span><span class="s1">&#39;Bobby&#39;</span><span class="p">}).</span><span class="nx">run</span><span class="p">()</span>\
</code></pre></div>', '<div class="highlight"><pre><code class="javascript"><span class="nx">r</span><span class="p">.</span><span class="nx">table</span><span class="p">(</span><span class="s1">&#39;agents&#39;</span><span class="p">).</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;007&#39;</span><span class="p">).</span><span class="nx">update</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">branch</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">row</span><span class="p">[</span><span class="s1">&#39;in_centrifuge&#39;</span><span class="p">],</span> <span class="p">{</span><span class="s1">&#39;expectation&#39;</span><span class="o">:</span> <span class="s1">&#39;death&#39;</span><span class="p">},</span> <span class="p">{})).</span><span class="nx">run</span><span class="p">()</span>\
</code></pre></div>'
  ];

  lambda_urls = ['http://www.youtube.com/watch?v=2ZUNLV7e3vU', 'http://www.youtube.com/watch?v=8xKo6-xu6dc', 'http://www.youtube.com/watch?v=crHHycz7T_c', 'http://www.youtube.com/watch?v=zmwue6Jq4KA'];

  $(function() {
    $('.navbar').waypoint('sticky');
    $('#header .query').html(possible_queries[Math.floor(Math.random() * possible_queries.length)]);
    return $('#footer .lambda').attr('href', lambda_urls[Math.floor(Math.random() * lambda_urls.length)]);
  });

}).call(this);