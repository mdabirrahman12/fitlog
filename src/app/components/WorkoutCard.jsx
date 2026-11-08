import React from 'react';
import Image from 'next/image';

const WorkoutCard = ({ exercise }) => {


    const {name,image,muscleGroups,equipment,duration,caloriesBurned,rating} = exercise;

    return (
        <div className="bg-[#1b1e24] rounded-3xl overflow-hidden border border-gray-800 hover:border-lime-500 transition duration-300">

            
            <div className="relative h-60 w-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            
            <div className="p-6 space-y-4">

               
                <div className="flex gap-2 flex-wrap">
                    {muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

              
                <h2 className="text-xl font-bold text-white uppercase">
                    {name}
                </h2>

                
                <p className="text-gray-400">{equipment}</p>

                {/* Exercise Information */}
                <div className="flex items-center gap-5 flex-wrap text-white">

                    <div className="flex items-center gap-1">
                        <span className="text-lime-400">◷</span>
                        <span>{duration} min</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="text-lime-400">♨</span>
                        <span>{caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="text-lime-400">☆</span>
                        <span>{rating}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;