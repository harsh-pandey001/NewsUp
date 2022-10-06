import React, { Component } from "react";
import Newsitems from "./Newsitems";

export class News extends Component {
  article = [
    {
      source: {
        id: null,
        name: "Lifehacker.com",
      },
      author: "Claire Lower",
      title: "Make a Punchy Vinaigrette With Canned Pumpkin",
      description:
        "It’s the season when everyone tries to eat as many pumpkin- and pumpkin spice-flavored food and drinks as they can. It’s fun. It’s festive. It’s somewhat out of hand. That’s OK though. Pumpkin-mania is showing no signs of fading—at least not while Trader Joe …",
      url: "https://lifehacker.com/make-a-punchy-vinaigrette-with-canned-pumpkin-1849622070",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/810410db81677c53668efd14c3cf18a4.jpg",
      publishedAt: "2022-10-06T14:30:00Z",
      content:
        "Its the season when everyone tries to eat as many pumpkin- and pumpkin spice-flavored food and drinks as they can. Its fun. Its festive. Its somewhat out of hand. Thats OK though. Pumpkin-mania is sh… [+1491 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "David Pierce",
      title:
        "Google thinks smartwatches are the future again — are you buying it?",
      description:
        "Google’s spotty history with Android Wear and Wear OS — and its penchant for killing products with no warning — makes it hard to believe the company is truly committed to wearables. But Google says it’s all in.",
      url: "https://www.theverge.com/23389978/google-pixel-watch-wearables-fitbit-future",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/PfojcDGplL-01pHH6g_uIrckPGg=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24069436/226324_Google_event_hands_on_vpavic_0014.jpg",
      publishedAt: "2022-10-06T14:47:05Z",
      content:
        "The Pixel Watch is mostly a Fitbit — but that’s just the start of the plan. | Photo by Vjeran Pavic / The Verge\r\n\n \n\n\n Google has been right about wearables for nearly a decade. Now, the company swea… [+14480 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Antonio G. Di Benedetto",
      title:
        "The Xbox Series S is $50 off with an extra controller thrown in for free",
      description:
        "Target is running its Deal Days promo to compete with Amazon’s Prime Early Access sale, and this deal is one of the best. Plus, more discounts on the Kindle Paperwhite, Sony WF-X1000XM4 earbuds, Echo Buds, and more.",
      url: "https://www.theverge.com/2022/10/6/23390509/xbox-series-s-sony-wf1000xm4-echo-buds-kindle-paperwhite-deal-sale",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/Cg3gSt9PPZShWR4STHd-K2YpbHk=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22013076/vpavic_201103_4275_0252.jpg",
      publishedAt: "2022-10-06T14:10:57Z",
      content:
        "The Xbox Series S is $50 off with an extra controller thrown in for free\r\nThe Xbox Series S is $50 off with an extra controller thrown in for free\r\n / This excellent deal leads the pack of Targets co… [+5767 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "David Nield",
      title: "How To Get the Most Out of Your Google or Apple Photos Memories",
      description:
        "If you think about how many photos and videos most of us are loading on to our smartphones with each passing day, it’s perhaps no surprise that there’s rarely time to go back through and pick out special moments or particular highlights—which is why photo lib…",
      url: "https://gizmodo.com/google-apple-photos-memories-curated-videos-settings-ho-1849607083",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/17cd1fbad6fb3495d7a3de636116f916.jpg",
      publishedAt: "2022-10-06T14:00:00Z",
      content:
        "If you think about how many photos and videos most of us are loading on to our smartphones with each passing day, its perhaps no surprise that theres rarely time to go back through and pick out speci… [+4910 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsUp - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <Newsitems
              title="myTitle"
              description="mydesc"
              imageUrl="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/810410db81677c53668efd14c3cf18a4.jpg"
              newsUrl = "TODO"/>
          </div>
          <div className="col-md-4">
            <Newsitems title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <Newsitems title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
