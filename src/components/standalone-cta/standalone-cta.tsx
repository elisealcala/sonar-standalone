import Text from '../text'
import { LogoIcon } from '../../icons/logo'
import './standalone-cta.css'

export const StandaloneCTA = () => {
	return (
		<div className="cta-container">
			<div className='title'>
				<Text type="titleSm">Get more in Sonar Studio</Text>
				<LogoIcon />
			</div>
			<Text className='description'>Discover the next-gen crypto tools as we are building them out</Text>
			<div className='button'>
				<div>
					Try the Beta NOW
				</div>
			</div>
		</div>
	)
}