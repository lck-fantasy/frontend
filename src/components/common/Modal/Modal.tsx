'use client'
import './Modal.scss'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
  openModal: boolean
  closeModal: () => void
  children: React.ReactNode
}

export default function Modal({ openModal, closeModal, children }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      modalRef.current?.close()
      document.body.style.overflow = 'auto'
    }
  }, [openModal])

  if (!openModal) return null
  return createPortal(
    <dialog className="modal" ref={modalRef} onClick={closeModal}>
      <button autoFocus className="modal__button" onClick={closeModal}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </dialog>,
    document.getElementById('modal'),
  )
}
