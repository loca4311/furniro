<script lang="ts">
	import { onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import ProductContent from '$lib/store/store';

	export let currentContent = '';
	export let editorContent: string = '';

	let element: HTMLDivElement;
	let editor: Editor | null = null;

	ProductContent.subscribe((data) => {
		currentContent = data;
	});

	onMount(() => {
		editor = new Editor({
			element: element,

			extensions: [StarterKit],
			content: currentContent,
			onTransaction: () => {
				editor = editor;
			}
		});
	});

	afterUpdate(() => {
		editorContent = editor?.getHTML();
		ProductContent.set(editorContent);
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="tiptap">
	{#if editor}
		<div>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleBold().run()}
				class:active={editor.isActive('bold')}
			>
				bold
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleItalic().run()}
				class:active={editor.isActive('italic')}
			>
				italic
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleStrike().run()}
				class:active={editor.isActive('strike')}
			>
				strike
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleCode().run()}
				class:active={editor.isActive('code')}
			>
				code
			</button>
			<button on:click|preventDefault={() => editor?.chain().focus().unsetAllMarks().run()}>
				clear marks
			</button>
			<button on:click|preventDefault={() => editor?.chain().focus().clearNodes().run()}>
				clear nodes
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().setParagraph().run()}
				class:active={editor.isActive('paragraph')}
			>
				p
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
				class:active={editor.isActive('heading', { level: 2 })}
			>
				H2
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
				class:active={editor.isActive('heading', { level: 3 })}
			>
				H3
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
				class:active={editor.isActive('heading', { level: 4 })}
			>
				H4
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleBulletList().run()}
				class:active={editor.isActive('bulletList')}
			>
				bullet list
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleOrderedList().run()}
				class:active={editor.isActive('orderedList')}
			>
				ordered list
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleCodeBlock().run()}
				class:active={editor.isActive('codeBlock')}
			>
				code block
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().toggleBlockquote().run()}
				class:active={editor.isActive('blockquote')}
			>
				blockQuote
			</button>
			<button on:click|preventDefault={() => editor?.chain().focus().setHorizontalRule().run()}>
				horizontal rule
			</button>
			<button on:click|preventDefault={() => editor?.chain().focus().setHardBreak().run()}>
				hard break
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().undo().run()}
				disabled={!editor.can().chain().focus().undo().run()}
			>
				undo
			</button>
			<button
				on:click|preventDefault={() => editor?.chain().focus().redo().run()}
				disabled={!editor.can().chain().focus().redo().run()}
			>
				redo
			</button>
		</div>
	{/if}

	<div class="tiptap border-none outline-none" bind:this={element}></div>
</div>

<style>
	/* Basic editor styles */
	button.active {
		background-color: black;
		color: #fff;
	}

	.tiptap {
		outline: 2px solid transparent !important;
		outline-color: transparent !important;
		outline-offset: 2px;
		border: none;
	}

	.ProseMirror-focused {
		outline-color: transparent;
	}
</style>
