
// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image classification using MobileNet and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
    // const thusnade = 'https://raw.githubusercontent.com/ml5js/ml5-library/main/examples/p5js/ImageClassification/ImageClassification/images/bird.jpg';
    const thusnade = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThP3yaOaiYX-dYjRGjN0GcmB_jDB1QRTA7qA&usqp=CAU'

    classifier = ml5.imageClassifier('MobileNet');
    img = loadImage(thusnade);
}

function setup() {
    createCanvas(400, 400);
    classifier.classify(img, gotResult);
    image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
    // Display error in the console
    if (error) {
        console.error(error);
    }
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv(`Label: ${results[0].label}`);
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
}
// let mobileNet;
// let puffin;

// const modelLoaded = () => {
//     console.log('Model is ready!!!')
//     mobileNet.predict(puffin, gotResults)
// }

// const gotResults = (error, result) => {
//     if (error) {
//         console.error(error)
//     } else {
//         console.log(result)
//     }
// }

// const imageReady = () => {
//     image(puffin, 0, 0, width, height)
// }

// function setup() {
//     const thusnade = 'https://raw.githubusercontent.com/ml5js/ml5-library/main/examples/p5js/ImageClassification/ImageClassification/images/bird.jpg';
//     createCanvas(400, 400);
//     puffin = createImg(thusnade, imageReady);
//     puffin.hide();
//     background(200);
//     mobileNet = ml5.imageClassifier('MobileNet', modelLoaded);
// }