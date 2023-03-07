import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem({ user: { login, avatar_url } }) {          //user.login, user.avatar_url
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>       
              <img src={avatar_url} alt='Profile' />              
            </div>
          </div>
        </div>

        <div>
          <h2 className='ml-1 card-title '>{login}</h2>
          <Link className='p-1 btn btn-success btn-sm rounded-btn text-base-content opacity-60 text-opacity-80' to={`/user/${login}`} > Visit Profile </Link>
        </div>

      </div>
    </div>
  )
}

UserItem.propTypes = { user: PropTypes.object.isRequired }

export default UserItem
