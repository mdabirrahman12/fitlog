// // import React from 'react';
// // import WorkoutCard from './WorkoutCard';

// // const LibrarySection = ({Workout}) => {
// //     return (
// //         <div className='mx-auto'>
// //             <h1 className='text-3xl'>The Library</h1>
// //             <h4>Twelve lifts covering every major muscle group.</h4>
// //             <div>
// //                 {Workout.map(exercise=>(<WorkoutCard key={exercise.id} exercise={exercise}/>))}
// //             </div>
// //         </div>
// //     );
// // };

// export default LibrarySection;

import React from 'react';
import WorkoutCard from './WorkoutCard';

const LibrarySection = ({ Workout =[]}) => {
    return (
        <div className='mx-auto gap-5'>
            <h1 className='text-3xl p-5'>The Library</h1>
            <h4 className='p-5'> Twelve lifts covering every major muscle group.</h4>

            <div className='grid grid-cols-3 gap-10 p-5'>
                {Workout.map(exercise => (
                    <WorkoutCard
                        key={exercise.id}
                        exercise={exercise}
                    />
                ))}
            </div>
        </div>
    );
};

export default LibrarySection;