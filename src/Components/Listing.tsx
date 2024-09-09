import React from 'react';

interface MainImage {
    url_570xN: string,
    listing_image_id: string
}

interface Item {
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    url: string,
    listing_id: string,
    MainImage: MainImage,
    error_messages?:string
}

function Listing() {
    const jsonData: Item[] = require('../data.json');
    const checkTitle = (title:string) => {
    if(title && title.length > 50) {
    return title.slice(0, 50) + '...';
    }
    return title;
    }

    const checkCurrency = (item:Item) => {
        switch (item.currency_code) {
            case 'USD':
                return <p className="item-price">${item.price}</p>
            case 'EUR':
                return <p className="item-price">€{item.price}</p>
            default:
                return <p className="item-price">{item.price}{item.currency_code}</p>
        }
    }

    const checkQua = (count:any) => {
        if(count <= 10) return 'level-low'
        if(count <= 20) return 'level-medium'
        if(count > 20) return 'level-high'


    }

    return (
        <div className='item__container'>
            <>
                {
                    jsonData.map((item:any, key:number) => (
                        <div className="item-list" key={key}>
                            <div className="item">
                                <div className="item-image" id={item.listing_id}>
                                    <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                                        <img src={item.MainImage?.url_570xN || item.error_messages} alt={item.MainImage?.listing_image_id}/>
                                    </a>
                                </div>
                                <div className="item-details">
                                    <div className="item-title">{checkTitle(item.title)}</div>
                                    <div className="item-price">{checkCurrency(item)}</div>
                                    <div className={`item-quantity ${checkQua(item.quantity)}`}>{item.quantity}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        </div>
    );
}

export default Listing;
