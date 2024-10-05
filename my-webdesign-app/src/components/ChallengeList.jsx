import React, { useState } from 'react';

const ChallengeList = ({ onChallengeComplete }) => {
    const [challenges] = useState([
        { id: 1, title: 'Kurangi Penggunaan Plastik', points: 10 },
        { id: 2, title: 'Hemat Listrik Sehari', points: 15 },
        { id: 3, title: 'Bersih-bersih Lingkungan', points: 20 },
        { id: 4, title: 'Berangkat dengan moda transportasi ramah lingkungan', points: 25 },
        { id: 5, title: 'Membuat konten mengajak orang lain untuk peduli lingkungan', points: 30 },
    ]);

    return (
        <div>
            <h2>Tantangan Ramah Lingkungan</h2>
            <ul>
                {challenges.map((challenge) => (
                    <li key={challenge.id}>
                        {challenge.title} - {challenge.points} poin
                        <button onClick={() => onChallengeComplete(challenge)}>
                            Selesaikan
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChallengeList;