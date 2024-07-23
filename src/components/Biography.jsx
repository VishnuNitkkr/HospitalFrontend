import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImage" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
          vitae. Facilis beatae quasi officia deserunt possimus corrupti
          asperiores accusamus, dolorum magnam incidunt enim pariatur delectus
          ratione quos. Sed cumque accusantium quisquam, ipsam asperiores nam
          repellendus tempore magnam, harum consequuntur temporibus dolorem id
          minima, ea assumenda debitis illo delectus hic? Cum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, odit!
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          beatae sed voluptatem quam ipsa ratione ipsum odio voluptate.
          Pariatur, inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quos.
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
