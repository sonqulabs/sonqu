'use client'
import { useEditor, EditorContent, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Strikethrough, Italic, List, ListOrdered } from 'lucide-react'
import { Separator } from '@/common/components/shadcnui/separator'
import { Toggle } from '@/common/components/shadcnui/toggle'
import React from 'react'

const RichTextEditor = React.forwardRef<
  HTMLDivElement,
  {
    value: string
    onChange: (value: string) => void
  }
>(({ value, onChange }, ref) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          'min-h-[150px] max-h-[150px] w-full rounded-md rounded-br-none rounded-bl-none border border-input bg-[#EBEBEB] px-3 py-2 border-b-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto'
      }
    },
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4'
          }
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4'
          }
        }
      })
    ],
    content: value, // Set the initial content with the provided value
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML()) // Call the onChange callback with the updated HTML content
    }
  })

  return (
    <div ref={ref}>
      <EditorContent editor={editor} />
      {editor && <RichTextEditorToolbar editor={editor} />}
    </div>
  )
})

RichTextEditor.displayName = 'RichTextEditor'
const RichTextEditorToolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="!mt-0 flex flex-row items-center gap-1 rounded-bl-md rounded-br-md border border-input bg-transparent p-1">
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Separator orientation="vertical" className="h-8 w-[1px]" />
      <Toggle
        size="sm"
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
    </div>
  )
}

export default RichTextEditor
