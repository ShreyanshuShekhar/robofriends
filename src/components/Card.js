import React from 'react';


const Card = ({name, email, id}) => {
  return(
    <div className='bg-orange dib br3 pa3 ma2 grow bw2 shadow-5' >
                <img alt='photo' src={`https://robohash.org/${id}?set=set3&&size=200x200`}/>
      <div>       
                          <h2>{name}</h2>
<p>{email}</p>
    </div>
    </div>
  );
}

export default Card;
