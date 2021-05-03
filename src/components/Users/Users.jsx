
import React, { useEffect, useState } from 'react'
import st from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/User.png' 
import { NavLink } from 'react-router-dom'

let Users = (props) => {
  const { setUsers } = props
  const [totalPages, setTotalPages] = useState(1);
  const [page,setPage]=useState(1);
    // По принципу componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${page}`)
      .then(response => {
        setUsers(response.data.items)
        setTotalPages(Math.ceil(response.data.totalCount/10))
      })
      .catch(e => console.log(e))
  }, [setUsers, page]);

  const plusNum = () => {
    if (page<totalPages){
      setPage(page+1)
    }
  }
 const minusNum = () =>{
   if (page>1){
     setPage(page-1)
   }
 }
  return  <div>
    <div>
    <span onClick={minusNum} className={st.mr}>{ '<' }</span>
      <span className={st.mr}>{page}</span>
      <span className={st.mr}>из {totalPages}</span>
      <span onClick={plusNum} className={st.mr}>{ '>' }</span>
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'profile/'+u.id}>
            <img alt="avatar" src={u.photos.small != null ? u.photos.small : userPhoto } className={st.usPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed 
            ? <button onClick = { ()=> {props.follow(u.id) } } >follow</button> 
            : <button onClick = { ()=> {props.unfollow(u.id) } } >unfollow</button> }
           
          </div>
        </span>

        
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
      </div>)
    }
    </div>
}

export default Users;