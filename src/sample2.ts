export type TFile = {
	name: string;
	type: string;
	children?: TFile[];
};

const data: TFile = {
	name: 'nested-comments',
	type: 'folder',
	test: {
		hello: 'world',
	},
	children: [
		{
			name: 'c-shape-box',
			type: 'folder',
			children: [
				{
					name: 'index.html',
					type: 'file',
				},
				{
					name: 'script.js',
					type: 'file',
				},
				{
					name: 'style.css',
					type: 'file',
				},
			],
		},
		{
			name: 'chessboard-bishop-movement-highlighter',
			type: 'folder',
			children: [
				{
					name: 'index.html',
					type: 'file',
				},
				{
					name: 'script.js',
					type: 'file',
				},
				{
					name: 'style.css',
					type: 'file',
				},
			],
		},
		{
			name: 'credit-card',
			type: 'folder',
			children: [
				{
					name: 'images',
					type: 'folder',
					children: [
						{
							name: 'chip.png',
							type: 'file',
						},
						{
							name: 'map.png',
							type: 'file',
						},
						{
							name: 'pattern.png',
							type: 'file',
						},
						{
							name: 'visa.png',
							type: 'file',
						},
					],
				},
				{
					name: 'index.html',
					type: 'file',
				},
				{
					name: 'style.css',
					type: 'file',
				},
			],
		},
		{
			name: 'employee-database-management-system',
			type: 'folder',
			children: [
				{
					name: 'data.json',
					type: 'file',
				},
				{
					name: 'index.html',
					type: 'file',
				},
				{
					name: 'script.js',
					type: 'file',
				},
				{
					name: 'style.css',
					type: 'file',
				},
			],
		},
		{
			name: 'gfg',
			type: 'folder',
			children: [
				{
					name: 'index.html',
					type: 'file',
				},
				{
					name: 'script.js',
					type: 'file',
				},
				{
					name: 'style.css',
					type: 'file',
				},
			],
		},
		{
			name: 'gitmate',
			type: 'folder',
			children: [
				{
					name: 'index.html',
					type: 'file',
				},
				{
					name: 'script.js',
					type: 'file',
				},
				{
					name: 'style.css',
					type: 'file',
				},
			],
		},
		{
			name: 'holy-grail-layout',
			type: 'folder',
			children: [
				{
					name: 'index.html',
					type: 'file',
				},
				{
					name: 'style.css',
					type: 'file',
				},
			],
		},
		{
			name: 'index.html',
			type: 'file',
		},
		{
			name: 'main.py',
			type: 'file',
		},
		{
			name: 'main2.py',
			type: 'file',
		},
		{
			name: 'otp-input',
			type: 'folder',
			children: [
				{
					name: 'index.html',
					type: 'file',
				},
				{
					name: 'script.js',
					type: 'file',
				},
				{
					name: 'style.css',
					type: 'file',
				},
			],
		},
		{
			name: 'output.json',
			type: 'file',
		},
		{
			name: 'output.md',
			type: 'file',
		},
		{
			name: 'Readme.md',
			type: 'file',
		},
		{
			name: 'script.js',
			type: 'file',
		},
		{
			name: 'sidebar.png',
			type: 'file',
		},
		{
			name: 'style.css',
			type: 'file',
		},
	],
};

export default data;
