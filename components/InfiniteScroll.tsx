// import React, { useEffect } from 'react';
// import './InfiniteScroll.css';

// const InfiniteScroll = () => {
//   useEffect(() => {
//     const scrollers = document.querySelectorAll('.scroller');

//     if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//       addAnimation();
//     }

//     function addAnimation() {
//       scrollers.forEach((scroller) => {
//         scroller.setAttribute('data-animated', true);

//         const scrollerInner = scroller.querySelector('.scroller__inner');
//         const scrollerContent = Array.from(scrollerInner.children);

//         scrollerContent.forEach((item) => {
//           const duplicatedItem = item.cloneNode(true);
//           duplicatedItem.setAttribute('aria-hidden', true);
//           scrollerInner.appendChild(duplicatedItem);
//         });
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Infinite Scroll Animation</h1>

//       <div className="scroller" data-speed="fast">
//         <ul className="tag-list scroller__inner">
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JS</li>
//           <li>SSG</li>
//           <li>webdev</li>
//           <li>animation</li>
//           <li>UI/UX</li>
//         </ul>
//       </div>

//       <div className="scroller" data-direction="right" data-speed="slow">
//         <div className="scroller__inner">
//           <img src="https://i.pravatar.cc/150?img=1" alt="" />
//           <img src="https://i.pravatar.cc/150?img=2" alt="" />
//           <img src="https://i.pravatar.cc/150?img=3" alt="" />
//           <img src="https://i.pravatar.cc/150?img=4" alt="" />
//           <img src="https://i.pravatar.cc/150?img=5" alt="" />
//           <img src="https://i.pravatar.cc/150?img=6" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfiniteScroll;



import React from 'react'

const InfiniteScroll = () => {
  return (
    <div>InfiniteScroll</div>
  )
}

export default InfiniteScroll