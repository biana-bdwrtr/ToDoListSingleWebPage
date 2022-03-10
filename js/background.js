const images = ["0.JPG", "1.JPG", "2.JPG", "3.JPG"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const filter = document.createElement("div"); //검은색 반투명 필터

//bgImage attribute 설정
bgImage.src = `img/${chosenImage}`;
bgImage.className = "bgImage";
bgImage.alt = "Background Image.";

//filter attribute 설정
filter.id = "filter";
filter.className = "bgImage";

//body 태그 뒷쪽으로 filter, bgImage 순차 추가
document.body.appendChild(filter);
document.body.appendChild(bgImage);