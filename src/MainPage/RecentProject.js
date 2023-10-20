import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'
function RecentProject(props) {
  return (
    <React.Fragment>
        <div className='flex items-center my-2'>
            <div className='w-1/5'>
                <FontAwesomeIcon icon={faTableCells} />
            </div>
            <div className='items-center w-4/5 text-left'>
                {props.project}
            </div>
        </div>
    </React.Fragment>
  )
}

export default RecentProject