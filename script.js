let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG')

gsap.set('svg', {
	visibility: 'visible'
})

let loc = {};
let pt = mainSVG.createSVGPoint();
// Get point in global SVG space
function cursorPoint(evt){
  pt.x = evt.clientX; 
  pt.y = evt.clientY;
  return pt.matrixTransform(mainSVG.getScreenCTM().inverse());
}

mainSVG.onpointermove = (e) => {
	loc = cursorPoint(e);
	gsap.set('#buttonPoke', {
		x: loc.x,
		y: loc.y
	})
} 
mainSVG.onpointerdown = (e) => {
	
	gsap.killTweensOf('.redHeart');
	gsap.set('#buttonPoke', {
		opacity: 1
	})
	gsap.fromTo('#buttonPoke', {
		scale: 0.25,
		transformOrigin: '50% 50%',
	}, {
		transformOrigin: '50% 50%',
		scale: 1,
		duration: 0.5,
		ease: 'elastic(0.63, 0.83)'
	})
	gsap.to('.redHeart', {
		scaleX: 1.15,
		scaleY: 0.85,
		duration: 0.521,
		transformOrigin: '50% 50%',
		ease: 'elastic(0.42, 0.47)'
	})	

}

mainSVG.onpointerup = (e) => {
	gsap.set('#buttonPoke', {
		opacity: 0
	})
 	gsap.to('.redHeart', {
		scaleX: 1,
		duration: 1.81,
		ease: 'elastic(1.5, 0.25)'
	})
	gsap.to('.redHeart', {
		scaleY: 1,
		duration: 1.5,
		ease: 'elastic(1.3, 0.35)'
	}) 	
}
let tl = gsap.timeline();
tl.from('#wholePanel', {
		svgOrigin: '400 300',
		scaleX: 0,
		scaleY: 0,
		duration: 0.67,
		delay: 1,
		ease: 'elastic(0.3, 0.25)'
	})
.from('.redHeart', {
		svgOrigin: '400 300',
		scaleX: 0,
		scaleY: 0,
		duration: 0.7,
		//delay: 1,
		ease: 'elastic(0.3, 0.25)'	
}, '-=0.6').timeScale(0.5)