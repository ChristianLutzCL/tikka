import Feature from '../../components/feature'
import {
  ClockCircleOutlined,
  ControlOutlined,
  SettingOutlined,
} from '@ant-design/icons'

export default function FeatureSection() {
  return (
    <div className='grid space-y-12 xl:space-y-0 xl:flex bg-white w-full xl:justify-between justify-center items-center 2xl:h-[25rem] py-12 px-32'>
      <Feature
        icon={
          <ClockCircleOutlined style={{fontSize: '25px', color: '#ffff'}} />
        }
        title='Collaborate and plan your campaigns'
        description='Schedule your social media posts so that you can focus on other things.'
        href='/insta'
      />
      <Feature
        icon={<ControlOutlined style={{fontSize: '25px', color: '#ffff'}} />}
        title='Collaborate and plan your campaigns'
        description='Schedule your social media posts so that you can focus on other things.'
        href='/insta'
      />
      <Feature
        icon={<SettingOutlined style={{fontSize: '25px', color: '#ffff'}} />}
        title='Collaborate and plan your campaigns'
        description='Schedule your social media posts so that you can focus on other things.'
        href='/insta'
      />
    </div>
  )
}
