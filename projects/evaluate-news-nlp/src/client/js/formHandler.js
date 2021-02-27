function handleSubmit(event) {
    event.preventDefault()
  let formText = document.getElementById('name').value;
  console.log("formText" +formText);
  postData("http://localhost:8081/postUrl", {userInput : formText})
  .then(function(finalData){
		console.log(finalData);
    })
  
    //check what text was put into the form field
  //let formText = document.getElementById('name').value
  Client.checkForName(formText)

  console.log("::: Form Submitted :::")
  fetch('http://localhost:8081/test')
  .then(res => res.json())
  .then(function(res) {
		document.getElementById('results').innerHTML = res.message
   })
}

export { handleSubmit }
//fetch("https://api.meaningcloud.com/sentiment-2.1?key=50e65ba3077146e3f900f7c53a9fe5c2&of=json&txt=hello,world&lang=en", {
  
//}).then(res => res.json())
//.then(data => console.log(data))




const postData = async(url='' , data={})=> {
	console.log("data is " +data.userInput);
	const response = await fetch(url, {
		method: POST,
		credentials: 'same-origin',
		headers: {
			'Content-Type':'application/json',
		},
		body: JSON.stringify(data),
	});
	try {
      const returnedData = await response.json();
      return returnedData;
    }catch(error) {
    console.log("error", error);
    }
}
	
