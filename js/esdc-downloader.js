define(['core/js/adapt'], function(Adapt) {

    function collectContent() {
        var contentObjects = Adapt.contentObjects;
        var course = document.createElement('div');
        var courseTitle = document.createElement('h1');
        courseTitle.className = 'course-title';
        courseTitle.innerHTML = Adapt.course.attributes.displayTitle;
        course.appendChild(courseTitle);


        for (var i = 0; i < contentObjects.length; i++) {

            var page = document.createElement('div');
            page.className = 'page-container';


            var pageTitle = document.createElement('h2');
            pageTitle.className = 'page-title'
            pageTitle.innerText = contentObjects.models[i].attributes.displayTitle;
            page.appendChild(pageTitle);

            var articles = contentObjects.models[i].attributes._children.models;

            for (var j = 0; j < articles.length; j++) {
                var article = document.createElement('div');
                article.className = 'article-container';
                var articleTitle = document.createElement('h3');
                articleTitle.className = 'article-title';
                var articleBody = document.createElement('div');
                articleBody.className = 'article-body';

                articleTitle.innerText = articles[j].attributes.title;
                articleBody.innerHTML = articles[j].attributes.body;

                article.appendChild(articleTitle);
                article.appendChild(articleBody);

                var blocks = articles[j].attributes._children.models;

                for (var k = 0; k < blocks.length; k++) {

                    var block = document.createElement('div');
                    block.className = 'block-container';
                    var blockTitle = document.createElement('h4');
                    blockTitle.className = 'block-title';
                    var blockBody = document.createElement('div');
                    blockBody.className = 'block-body';

                    blockTitle.innerText = blocks[k].attributes.title;
                    blockBody.innerHTML = blocks[k].attributes.body;

                    block.appendChild(blockTitle);
                    block.appendChild(blockBody);

                    var components = blocks[k].attributes._children.models;

                    for (var l = 0; l < components.length; l++) {

                        var type = components[l].attributes._component;

                        if (type !== 'quicknav') {
                            var component = document.createElement('div');
                            component.className = 'component-container';
                            var componentTitle = document.createElement('h5');
                            component.className = 'component-title';
                            var componentBody = document.createElement('div');
                            component.className = 'component-body';

                            componentTitle.innerText = components[l].attributes.title;
                            componentBody.innerHTML = components[l].attributes.body;
                            component.appendChild(componentTitle);
                            component.appendChild(componentBody);
                        }

                        switch (type) {
                            case 'accordion':
                                var items = components[l].attributes._items;
                                for (var n = 0; n < items.length; n++) {
                                    var itemTitle = document.createElement('h6');
                                    itemTitle.className = 'accordion-tile';
                                    itemTitle.innerText = items[n].title;
                                    var itemBody = document.createElement('div');
                                    itemBody.innerHTML = items[n].body;
                                    itemBody.className = 'accordion-body';

                                    if (items[n]._graphic.src !== '') {
                                        var itemGraphic = document.createElement('img');
                                        itemGraphic.className = 'accordion-img';
                                        itemGraphic.src = items[n]._graphic.src;
                                        itemGraphic.alt = items[n]._graphic.alt;
                                        itemGraphic.attribution = items[n]._graphic.attribution;
                                        itemBody.appendChild(itemGraphic);

                                    }
                                    component.appendChild(itemTitle);
                                    component.appendChild(itemBody);
                                }
                                break;
                            case 'graphic':
                                var graphic = document.createElement('img');
                                graphic.src = (components[l].attributes._graphic.large !== "") ? components[l].attributes._graphic.large : components[l].attributes._graphic.small;
                                graphic.alt = components[l].attributes._graphic.alt;
                                component.appendChild(graphic)
                                break;
                            case 'hotgraphic':
                                var mainImage = document.createElement('img');
                                mainImage.src = components[l].attributes._graphic.src;
                                mainImage.alt = components[l].attributes._graphic.alt;
                                mainImage.attribution = components[l].attributes.attribution;
                                component.appendChild(mainImage);

                                var itemDiv = document.createElement('div');
                                var items = components[l].attributes._items;

                                for (var n = 0; n < items.length; n++) {
                                    var itemTitle = document.createElement('h6');
                                    itemTitle.innerText = items[n].title;
                                    var itemBody = document.createElement('div');
                                    itemBody.innerHTML = items[n].body;
                                    var itemGraphic = document.createElement('img');
                                    itemGraphic.src = items[n]._graphic.src;
                                    itemGraphic.alt = items[n]._graphic.alt;

                                    itemBody.appendChild(itemGraphic);
                                    itemDiv.appendChild(itemTitle);
                                    itemDiv.appendChild(itemBody);
                                }
                                component.appendChild(itemDiv);
                                break;

                            case 'hotgrid':

                                var itemDiv = document.createElement('div');
                                var items = components[l].attributes._items;

                                for (var n = 0; n < items.length; n++) {
                                    var itemTitle = document.createElement('h6');
                                    itemTitle.innerText = items[n].title;
                                    var itemBody = document.createElement('div');
                                    itemBody.innerHTML = items[n].body;
                                    var itemGraphic = document.createElement('img');
                                    itemGraphic.src = items[n]._graphic.src;
                                    itemGraphic.alt = items[n]._graphic.alt;

                                    itemBody.appendChild(itemGraphic);
                                    itemDiv.appendChild(itemTitle);
                                    itemDiv.appendChild(itemBody);
                                }
                                component.appendChild(itemDiv);

                                break;

                            case 'imageSlider':

                                var itemDiv = document.createElement('div');
                                var items = components[l].attributes._items;

                                for (var n = 0; n < items.length; n++) {
                                    var itemTitle = document.createElement('h6');
                                    itemTitle.innerText = items[n].title;
                                    var itemGraphic = document.createElement('img');
                                    itemGraphic.src = items[n].src;
                                    itemGraphic.alt = items[n].alt;
                                    itemDiv.appendChild(itemTitle);
                                    itemDiv.appendChild(itemGraphic);
                                }
                                component.appendChild(itemDiv);

                                break;

                            case 'narrative':

                                var itemDiv = document.createElement('div');
                                var items = components[l].attributes._items;

                                for (var n = 0; n < items.length; n++) {
                                    var itemTitle = document.createElement('h6');
                                    itemTitle.innerText = items[n].title;
                                    var itemBody = document.createElement('div');
                                    itemBody.innerHTML = items[n].body;
                                    var itemGraphic = document.createElement('img');
                                    itemGraphic.src = items[n]._graphic.src;
                                    itemGraphic.alt = items[n]._graphic.alt;

                                    itemBody.appendChild(itemGraphic);
                                    itemDiv.appendChild(itemTitle);
                                    itemDiv.appendChild(itemBody);
                                }
                                component.appendChild(itemDiv);

                                break;

                            case 'mcq':
                                console.log(components[l]);
                                var itemDiv = document.createElement('div');
                                var items = components[l].attributes._items;

                                for (var n = 0; n < items.length; n++) {
                                    var option = document.createElement('p');
                                    option.innerText = items[n].text;
                                    itemDiv.appendChild(option);
                                }
                                component.appendChild(itemDiv);

                                var feedbackTitle = document.createElement('h6');
                                feedbackTitle.innerText = components[l].attributes._feedback.title;
                                var correctFeedback = document.createElement('div');
                                correctFeedback.innerHTML = components[l].attributes._feedback.correct;


                                var feedbackDiv = document.createElement('div');
                                feedbackDiv.appendChild(feedbackTitle);
                                feedbackDiv.appendChild(correctFeedback);
                                component.appendChild(feedbackDiv);


                                break;

                        }

                        block.appendChild(component);
                    }
                    article.appendChild(block);
                }
                page.appendChild(article);
            }
            course.appendChild(page);
        }
        updateImageSrcs(course);
        downloadPDF(course);
        /*
        if (labels.buttons) {
            var buttons = attrbs._buttons;
            console.log(buttons);
            for (const [button, props] of Object.entries(buttons)) {
                if (typeof props === 'object') {
                    for (const key in props) {
                        props[key] = "OVERRIDE";
                    }
                } else if (typeof props === 'string') {
                    console.log(button, props);
                }
            }
        }*/
    }

    function updateImageSrcs(obj) {
        var images = obj.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].src; // updates to full url link
        }
    }

    function downloadPDF(obj) {
        var printWindow = window.open('');

        // set course title
        printWindow.document.title = Adapt.course.attributes.displayTitle;

        // add styles
        var ss = document.createElement('style');
        ss.textContent = 'html,body {margin: 0;font-family: sans-serif;} .page-container{width:80%;margin:auto;padding:50px 0} .course-title {width: 100%;padding: 50px;background-color: #0f2a4a;text-align: center;color: white;margin: 0;font-family: sans-serif;} page-title {font-size: 36px;color: #0068AE;font-weight: 300;}img {max-width: 100%;}'

        printWindow.document.head.appendChild(ss);

        // add content
        printWindow.document.body.appendChild(obj);
    }

    // download content when content is loaded
    Adapt.once('adapt:initialize', function() {
        var config = Adapt.course.get('_coursePDF');
        if (!config || !config._isEnabled) collectContent();
    });
});