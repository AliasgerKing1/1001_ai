import scrapy

class TechwaveSpider(scrapy.Spider):
    name = "techwave"
    allowed_domains = ["frenify.com"]
    start_urls = ["https://frenify.com/work/envato/frenify/html/techwave/1/community-feed.html"]

    def parse(self, response):
        columns = response.css('div[class="feed__content"] div[class="feed__results"] ul[class="fn__gallery_items"] li[class="fn__gallery_item"]')
        for col in columns :
            yield {
                "title" : col.css('div[class="item"] div[class="item__info"] div[class="info__header"] div[class="user__info"] h3::text').extract_first(),
                "likes" : col.css('div[class="item"] div[class="item__info"] div[class="info__header"] a[class="fn__like no_border"] span::text').extract_first(),
                "images" : col.css('div[class="item"] div[class="img"]  img::attr(src)').extract_first(),
            }
        

