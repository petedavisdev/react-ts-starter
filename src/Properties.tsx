import { useState } from 'react';

type Props = {
	object: Record<string, unknown>;
};

export function Properties(props: Props) {
	const [isOpen, setIsOpen] = useState(true);

	if (typeof props.object === 'string') {
		return <code style={{ color: 'hotpink' }}>{props.object}</code>;
	}

	function toggleOpen() {
		setIsOpen((current) => !current);
	}

	if (Array.isArray(props.object)) {
		return (
			<>
				<code onClick={toggleOpen}>[</code>
				{isOpen &&
					props.object.map((item) => (
						<p>
							<code>
								<Properties object={item} />
							</code>
						</p>
					))}
				<p>
					<code>]</code>
				</p>
			</>
		);
	}

	const isObject =
		typeof props.object === 'object' &&
		!Array.isArray(props.object) &&
		props.object !== null;

	if (isObject) {
		return (
			<>
				<code>{`{`}</code>
				{Object.entries(props.object).map(([key, value]) => (
					<p style={{ marginLeft: '2rem' }}>
						<code style={{ color: 'blue' }}>{key}:</code>
						<p>
							<code>
								<Properties
									object={value as Record<string, unknown>}
								/>
							</code>
						</p>
					</p>
				))}
				<p>
					<code>{`}`}</code>
				</p>
			</>
		);
	}
}
