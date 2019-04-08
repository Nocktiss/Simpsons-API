import  React  from  'react';

const  GenerateSimpsons = ({ selectSimpsons }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectSimpsons}>Change Simpsons</button>
        </div>
    );
};

export  default  GenerateSimpsons;