import { type FC } from 'react';

 export interface ProgressBarProps {
    percentage: string;
    fromColor: string;
    toColor: string;
    technology?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentage, fromColor, toColor }) => {
    const calculateProgress = 405 - ((405 * Number(percentage)) / 100);

    return (
        <div className='relative h-48 w-48'>
            <div className='absolute w-full h-full rounded-full border-neutral-200 dark:border-neutral-800 border-[25px]'/>
            <div className='absolute top-0 left-0'>
                <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-48 h-48 fill-none stroke-[25px]' style={{ strokeDasharray: 405 }}>
                    <rect x="10" y="10" width="129" height="129" rx="64.5" stroke={`url(#paint0_angular_109_${toColor})`} strokeWidth="20" strokeDashoffset={calculateProgress}/>
                    <defs>
                        <radialGradient id={`paint0_angular_109_${toColor}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(75 74) rotate(90) scale(74.5)">
                            <stop offset="3.4895e-05" stopColor={fromColor}/>
                            <stop offset="1" stopColor={toColor}/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center dark:text-white font-semibold text-2xl'>
                {percentage}%
            </div>
        </div>
    )
}

export default ProgressBar;