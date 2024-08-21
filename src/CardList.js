// import React from 'react';
// import Card from './Card';

// const CardList = ({ robots }) => {

//     const cardsArray = robots.map((_user, i) => {
//         return (
//             <Card
//                 key={i}
//                 id={robots[i].id}
//                 name={robots[i].name}
//                 email={robots[i].email}
//             />)
//     });

//     return (
//         <div>
//             {cardsArray}
//         </div>
//     );
// }

// export default CardList;

import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map(robot => (
                <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
            ))}
        </div>
    );
};

export default CardList;
