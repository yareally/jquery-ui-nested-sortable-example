"use strict";
$(() => {
  const sortable = $('.sortable');
  const childSortable = $('.child-sortable');

  sortable.sortable({
    connectWith: '.sortable, .child-sortable',
    cursor: 'move',
    placeholder: 'sortable-placeholder',
    handle: 'div',
    cursorAt: {left: 150, top: 17},
    scroll: false,
    zIndex: 9999,
    stop: (event, ui) => {
      if (ui.item !== null && ui.item[0].classList.contains('folder') && ui.item[0].parentElement.classList.contains('child-sortable')) {
        sortable.sortable('cancel');
        sortable.sortable('refresh');
      }
    }
  });
  sortable.disableSelection();

  childSortable.sortable({
    connectWith: ' .sortable, .child-sortable',
    cursor: 'move',
    placeholder: 'sortable-placeholder',
    handle: 'div',
    cursorAt: {left: 150, top: 17},
    scroll: false,
    zIndex: 9999
  });
  childSortable.disableSelection();
});
