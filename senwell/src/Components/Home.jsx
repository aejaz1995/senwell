import React from 'react';
import styles from "./Css/Home.module.css"
// import { Button } from "@material-ui/core"
import "./Css/styles.css"

const Home = () => {
    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate() 
    const dateStr = (date > 9 ? date: "0"+date) + "-" + (month > 9 ? month: "0"+month) + "-" + year 

    const cards = [{title:"NEXT EUROMILLION JACKPOT",btn:"play euro millions",img:"https://wplivemedia.s3-eu-west-1.amazonaws.com/wp-content/uploads/euroball.png",date:"Draw Date :"+dateStr},{title:"next lotto jackpot",btn:"play lotto",img:"https://wplivemedia.s3-eu-west-1.amazonaws.com/wp-content/uploads/lottoball.png",date:"Draw Date :"+dateStr},{title:"visit our store",btn:"visit the store",img:"https://wplivemedia.s3-eu-west-1.amazonaws.com/wp-content/uploads/cart_icon.png",date:"Visit our store to find a wide range of lottery products, instant win games  and reward points prizes! "}].map((item,indx)=>{
        return(  <div className="card" key={indx}>
        <div className="cardContent">
            <div className="imgBox">
                <img src={item.img}/>
            </div>
            <div className="cardDetails">
                <h4 className="heading">{item.title}</h4>
               {indx==2 ? null&&<h1 className="money"> £46M</h1>:<h1 className="money"> £46M</h1>}
                <p style={indx==2?{width:"170px",height:"70px"}:{width:"170px"}} className="date"> {item.date} </p>
            </div>
        </div>
        
            <button className="playBtn">{item.btn}</button>

    </div>)
    })

    return (
        <>
        <div className={styles.home}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.content__heading}>More Chances To Win For Less</h1>
                    <h4 className={styles.content__subheading}>Ready-Made Syndicates Where We  Manage Everything For You</h4>
                </div>
                <button className={styles.joinBtn}> JOIN NOW </button>
                <p className={styles.content__info}>By creating a LottoSocial account I accept  the <a href="#">terms and condition</a> and the  <a href="#">privacy policy</a>
                    I am aware that I can change my preferences or opt out of receiving communications at any time within my account. -Olu Test
                </p>
            </div> 
        </div>
        <div className="container">
                {cards}
            </div>
        </>
    )
}

export { Home }
