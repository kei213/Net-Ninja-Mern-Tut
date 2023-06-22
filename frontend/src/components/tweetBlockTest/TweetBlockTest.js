import { useState, useEffect, useRef } from "react";


const DisplayTweet = (props) => {    

	const tweetContainer = useRef(null);
	

	// tweetnumber sinitial value should be null do not change
	

	// let displayTweetId = tweetIDS[tweetNumber - 1];
	// let nextTweetId = tweetIDS[tweetNumber + 1 - 1];

	const [tweetOneLoaded, setTweetOneLoaded] = useState(false);
	const [tweetTwoLoaded, setTweetTwoLoaded] = useState(false);
	const [tweetThreeLoaded, setTweetThreeLoaded] = useState(false);
	const [tweetFourLoaded, setTweetFourLoaded] = useState(false);
	const [tweetFiveLoaded, setTweetFiveLoaded] = useState(false);
	//firstTweetLoaded is used to hide the spinner
	const [firstTweetLoaded, setfirstTweetLoaded] = useState(false);
    
    function createTweet(twttr)  {
		twttr.widgets
		.createTweet(props.tweetId, tweetContainer.current, {
		    theme: "dark",
		})
		.then(() => {
			
		});
    }

	useEffect(() => {
		console.log('useeffect ran')
		const s = document.createElement("script");
		s.id = "tweetScript";
		s.setAttribute("src", "https://platform.twitter.com/widgets.js");
		s.setAttribute("async", "true");
		document.head.appendChild(s);

		if (typeof twttr !== "undefined") {
			createTweet(twttr)
		}

		const tweetScript = document.getElementById("tweetScript");
		tweetScript.addEventListener("load", () => {
		     console.log(twttr)
		     
		});
    }, []);



	return (
		<div ref = {tweetContainer}>
		</div>
	)
}
	




const TweetBlockTest = () => {

	const [tweetNumber, setTweetNumber] = useState(null);

    


    {/*useEffect(() => {
		console.log("tweetnumber", tweetNumber);

		if (tweetNumber === 1) {
			if (tweetOneLoaded === false || tweetTwoLoaded === false) {
				twttr.widgets
					.createTweet(displayTweetId, tweetOneContainer.current, {
						theme: "dark",
					})
					.then(function (el) {
						setfirstTweetLoaded(true);
						// document.getElementById('loadingMessage').style.display = "none"
						setTweetOneLoaded(true);
						twttr.widgets
							.createTweet(
								nextTweetId,
								tweetTwoContainer.current,
								{
									theme: "dark",
								}
							)
							.then(() => {
								setTweetTwoLoaded(true);
							});
					});
			}
		}

		if (tweetNumber === 2) {
			if (tweetThreeLoaded === false) {
				twttr.widgets
					.createTweet(nextTweetId, tweetThreeContainer.current, {
						theme: "dark",
					})
					.then(() => {
						setTweetThreeLoaded(true);
					});
			}
		}

		if (tweetNumber === 3) {
			if (tweetFourLoaded === false) {
				twttr.widgets
					.createTweet(nextTweetId, tweetFourContainer.current, {
						theme: "dark",
					})
					.then(() => {
						setTweetFourLoaded(true);
					});
			}
		}

		if (tweetNumber === 4) {
			if (tweetFiveLoaded === false) {
				twttr.widgets
					.createTweet(nextTweetId, tweetFiveContainer.current, {
						theme: "dark",
					})
					.then(() => {
						setTweetFiveLoaded(true);
					});
			}
		}
    }, [tweetNumber]);	*/}	

    return (
	    <div className="App">
	      <DisplayTweet tweetId = "1637000967697715200">	          
	      </DisplayTweet>
	      <DisplayTweet tweetId = "1636738941519900673">	          
	      </DisplayTweet>
	      <DisplayTweet tweetId = "1635640454791217154">	          
	      </DisplayTweet>
	      <DisplayTweet tweetId = "1632755348363722754">	          
	      </DisplayTweet>
	    </div>
    );
}

export default TweetBlockTest;