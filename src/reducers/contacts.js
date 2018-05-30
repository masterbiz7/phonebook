const initialState = [
{
 	id: Date.now.toString(),
	name: "Chad Snyder",
	phone: "+38 (067) 245 55 66",
	company: "IBM",
	email: "chad21@mail.com",
	photo: "https://s3.amazonaws.com/uifaces/faces/twitter/vanchesz/128.jpg"
},
{
	id: Date.now.toString(),
	name: "Jack Nickolson",
	phone: "+38 (068) 235 55 66",
	company: "IGM",
	email: "nicks34@mail.com",
	photo: "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
}
];

export default function contact(state = initialState) {
  return state;
}