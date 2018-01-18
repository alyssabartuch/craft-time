import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss'],
    animations: [routerTransition()]
})
export class LibraryComponent implements OnInit {
    constructor() {}

    patternCards = [
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "spinning",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "crochet",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "spinning",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "crochet",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://d1a6t1943usoj7.cloudfront.net/v1/1a01ab15-bd66-4578-824a-cd3741daaa1e/medium/1470696788032-knitting_yarn_20160722_002_null.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content"
      }
    ];

    filter = {
        type: {
            selected: 0,
            options: ["knitting", "crochet", "spinning"]
        }
    }

    ngOnInit() {}


    setTypeOption(typeOption) {
    //this. because accessing filter inside method
    // >= 0 shorthand check that the parameter matches an item in the array
        let indexOfTypeOption = this.filter.type.options.indexOf(typeOption);

        if (indexOfTypeOption >= 0) {
            this.filter.type.selected = indexOfTypeOption;


            //call function to refreshList
            //this. because it refers to itself on the instance
            this.refreshList(indexOfTypeOption);

        }

    }

    refreshList(craftType) {

        let filterList = [];

        //if the type of the next array item is
        for (let patternCard in this.patternCards) {
            console.log(this.patternCards[patternCard]);
            /*if (craftType = this.patternCard.type) {
                filterList.push(this.patternCard);
                console.log(this.patternCard);
            */

            }
        }


    }
