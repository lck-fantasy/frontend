'use client'
import './Modal.scss'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
  isModalOpen: boolean
  closeModal: () => void
  children: React.ReactNode
}

export default function Modal({
  isModalOpen,
  closeModal,
  children,
}: ModalProps) {
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isModalOpen])

  if (!isModalOpen) return null
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <button className="modal__button" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.getElementById('modal'),
  )
}
