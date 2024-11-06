import { userFetchData } from "../hooks/userFetchData"


export const UsersList = ({ url }) => {

    const { data, loading } = userFetchData({ url })

    return (
        <>
            <ul>
                {loading ? <p>Cargando...</p>
                : url === 'users'
                    ?
                    data.map(user =>
                        <li key={user.id}>
                            <p><b>Nombre: </b> {user.name} <br /></p>
                            <span><b>Email:</b> {user.email}<br /><br /></span>
                            <span><b>Telefono:</b> {user.phone}</span>
                        </li>)
                    : data.map(comment=>
                        <li key={comment.id}>
                            <p><b>Nombre:</b>{comment.name} <br /></p>
                            <span><b>Comentarios</b>{comment.body}<br/><br /></span>
                            <span><b>Email:</b>{comment.email}</span>
                        </li>)
            
                    }
             </ul>       
        </>
    )
}
