let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.753220, 37.622513],
        zoom: 15, 
        controls: []
    });

    const myPlacemark = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.749717, 37.604118],
            draggable: false,
            iconLayout: 'default#imageWithContent',
            iconImageHref: "./img/pointmap.svg",
            iconImageSize: [58, 73],
            //iconImageOffset: [0, 0]
        },        
    });
        myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);