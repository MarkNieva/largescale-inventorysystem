import { useState, useEffect } from 'react';
import StartupAnimationSt from '../loadingscreen/StartupAnimationSt.module.css';


const StartupAnimation = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2500);
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete && onComplete(), 600);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`${StartupAnimationSt.startupOverlay} ${stage >= 3 ? StartupAnimationSt.fadeOut : ''}`}>
      <div className={StartupAnimationSt.startupContent}>
        {/* Animated Background */}
        <div className={StartupAnimationSt.animatedBg}>
          <div className={`${StartupAnimationSt.bgCircle} ${StartupAnimationSt.circle1}`}></div>
          <div className={`${StartupAnimationSt.bgCircle} ${StartupAnimationSt.circle2}`}></div>
          <div className={`${StartupAnimationSt.bgCircle} ${StartupAnimationSt.circle3}`}></div>
        </div>

        {/* Logo Container */}
        <div className={`${StartupAnimationSt.logoContainer} ${stage >= 1 ? StartupAnimationSt.animateIn : ''}`}>
         
           {/* <img src={LearnEngLogo} alt="LearnENG Logo" className={StartupAnimationSt.logo} /> */}
        </div>

        {/* Tagline */}
        <div className={`${StartupAnimationSt.tagline} ${stage >= 2 ? StartupAnimationSt.animateIn : ''}`}>
          <h2>Skill issue! Git good</h2>
          <div className={StartupAnimationSt.taglineUnderline}></div>
        </div>

        {/* Loading Animation */}
        <div className={`${StartupAnimationSt.loadingSection} ${stage >= 2 ? StartupAnimationSt.animateIn : ''}`}>
          <div className={StartupAnimationSt.loadingBar}>
            <div className={StartupAnimationSt.loadingProgress}></div>
          </div>
          <p className={StartupAnimationSt.loadingText}>Initializing your Ass over here...</p>
        </div>
      </div>
    </div>
  );
};

export default StartupAnimation;