let state = {
    messagePage: {
 messages__storage: [
  {message:'Привет санечек как делишки?'},
  {message:'yjhvfkmyj f e nt,z rfr'},
  {message:'сори т9'},
  {message:'нормально говорю, у тебя как?'},
  {message:'Я покакал'},
  {message:'хах найс'},
  {message:'спасибо))'}
],

 Message__author__storage: [
  {name:'Alice', user__url:'id9598289'},
  {name: 'Mikhail', user__url:'id3883294'}
]}, 

Profile__Posts:[
  {id:'1', username: 'Sergey', 
  img__url:"https://sun1-28.userapi.com/s/v1/ig2/VMRm1JVtwzLcQkDEhkAf3-ZKiCRbq2bSc-XfaOCJyTzjZLQYcEo5KtUHFoRNYyaMDzE_TatOrpftqxsGCBIsWs8J.jpg?size=50x50&quality=95&crop=708,6,722,722&ava=1",
  post__message:"Саня нам не туда там шлакбаум"},
  {id:'2', username: 'Sanyok', 
  img__url:"https://sun1-57.userapi.com/s/v1/if1/hSyZu6Vps4K1f8TsTgBsg6pxy7wLg8D5Ms_sNYINfw7gxqpM6D4XTfwQKZGmnoTC9ezKCd5m.jpg?size=50x50&quality=96&crop=910,109,954,954&ava=1",
  post__message:"Да не, нам туда"},
  {id:'3', username: 'Sergey', 
  img__url:"https://sun1-28.userapi.com/s/v1/ig2/VMRm1JVtwzLcQkDEhkAf3-ZKiCRbq2bSc-XfaOCJyTzjZLQYcEo5KtUHFoRNYyaMDzE_TatOrpftqxsGCBIsWs8J.jpg?size=50x50&quality=95&crop=708,6,722,722&ava=1",
  post__message:"Я точно тебе говорю, нам не туда"}
]
}

export let addPost = (username, img__url, post__message) =>{
    let newPost =
    {
      id: 6548,
      username: username,
      img__url: img__url,
      post__message: post__message
    }

    state.Profile__Posts.push(newPost);
}

export default state;