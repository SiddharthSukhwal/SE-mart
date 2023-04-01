import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <>
     <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner active">
    <div class="carousel-item">
      <img src="https://media3.bosch-home.com/Images/1200x/19739336_Bosch_Cooling_Meta-Image_1200x630.jpg" class="d-block w-100 " alt="..."/>
    </div>
  <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpJ-G5U7J7wo3xzYabyqxk3EpHaaEBOqeLbhs02O0JZOqLkEwvCQXsZpuni76wuiGhzI&usqp=CAU" class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="https://us.123rf.com/450wm/aleksanderdn/aleksanderdn2001/aleksanderdn200100014/138468954-set-of-home-kitchen-appliances-in-the-room-on-the-wall-background-3d.jpg?ver=6" class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="https://img.etimg.com/thumb/msid-78640201,width-640,resizemode-4,imgsize-57026/air-conditioners.jpg" class="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div>
<Product/>
</div>
    </>
  )
}

export default Home


