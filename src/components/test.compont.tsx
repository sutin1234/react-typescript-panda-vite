import { css } from '@panda/css'
type Props = {
    title?: string
}
const titleStyle = css({
    color: 'blue.400',
    fontWeight: 'bold'
})
export function Test(prop: Props){
    return(
        <div>
            <div className={titleStyle}>{prop.title}</div>
            Test Component
        </div>
    )
}
