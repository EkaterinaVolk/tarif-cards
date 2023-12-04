import React from 'react'

function Tarif(props) {
    return (
        <div className={props.class} 
        id={props.flag === true ? 'newid' : null}
        >
                <h4 className="header">Безлимитный {props.price}</h4>
                <div className="price-container">            
                    <p className="price">{props.price}</p>
                    <p className="priceParagraph">рублей/месяц</p>
                    </div>
            <p className="paragraphSpeed">до {props.speed} Мбит/сек</p>
            <p className="paragraph">Объём включённого трафика не ограничен</p>
        </div>
    );
  }


export default Tarif;

