//위쪽의 메인으로 갈 수 있는 웹페이지 제목과
//각 페이지로 이동가능한 버튼들을 제공하는 것
//각 페이지로 이동할 수 았도록 link를 넣어주려면 lick라는 컴포넌트를 가져와야한다,
import {Link} from 'react-router-dom';

export default function Header(){
  return(
    <div className='header'>
      <h1>
        <Link to = "/">Todo-list</Link>
      </h1>
      <div className='menu'> {/*다른 페이지로 이동할 수 있는 메뉴를 나타낸 것이다.*/}
        <Link to = "/todo" className="link">
          <button>Todo</button>
        </Link>
        <Link to = "/done" className="link">
          <button>Done</button>
        </Link>
        <Link to = "/create_item" className="link">
          <button>Add</button>
        </Link>
      </div>
    </div>
    );
}