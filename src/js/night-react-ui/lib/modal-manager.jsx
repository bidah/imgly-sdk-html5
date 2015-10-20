/*
 * Photo Editor SDK - photoeditorsdk.com
 * Copyright (c) 2013-2015 9elements GmbH
 *
 * Released under Attribution-NonCommercial 3.0 Unported
 * http://creativecommons.org/licenses/by-nc/3.0/
 *
 * For commercial use, please contact us at contact@9elements.com
 */

import { EventEmitter } from '../globals'

class Modal extends EventEmitter {
  constructor (type, title, text) {
    super()
    this.type = type
    this.title = title
    this.text = text
  }

  /**
   * Closes this modal
   */
  close () {
    this.emit('close')
  }
}

export default class ModalManager extends EventEmitter {
  constructor () {
    super()

    this._modals = []
  }

  /**
   * Creates a loading modal
   * @param  {String} text
   * @return {Modal}
   */
  displayLoading (text) {
    const modal = new Modal('loading', null, text)
    this._addModal(modal)
    return modal
  }

  /**
   * Creats a warning modal
   * @param  {String} title
   * @param  {String} text
   * @return {Modal}
   */
  displayWarning (title, text) {
    const modal = new Modal('warning', title, text)
    this._addModal(modal)
    return modal
  }

  /**
   * Adds the given modal to the list of modals
   * @param {Modal} modal
   * @private
   */
  _addModal (modal) {
    this._modals.push(modal)
    modal.on('close', () => {
      this._removeModal(modal)
    })
  }

  /**
   * Removes the given modal from the list of modals
   * @param  {Modal} modal
   * @private
   */
  _removeModal (modal) {
    const index = this._modals.indexOf(modal)
    this._modals.splice(index, 1)
  }

  /**
   * Returns the modals
   * @return {Array.<Modal>}
   */
  getModals () {
    return this._modals
  }

  /**
   * Returns the one and only instance of this class
   * @return {ModalManager}
   */
  static get instance () {
    if (!this._instance) {
      this._instance = new ModalManager()
    }
    return this._instance
  }
}
