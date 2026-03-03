import styled from "styled-components";

interface HeaderProps {
	className?: string
}

const HeaderContainer = ({className}: HeaderProps) => {
	return (
		<h1 className={className}>Todo List</h1>
	)
}

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: center;
	padding: 12px;
	background: #ddd;
`