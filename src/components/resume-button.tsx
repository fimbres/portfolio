import { Button } from './ui/button';

import CVIngles from 'public/resume.pdf';

const ResumeButton = () => {
  const Download = () => {
    window.open(CVIngles);
  };

  return (
    <Button className="w-full" variant="outline" size="lg" onClick={Download}>See My Resume</Button>
  )
}

export default ResumeButton;
