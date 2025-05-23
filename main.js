/**
 * @license
 * Copyright 2023 EunneyBoogy Studio
 * SPDX-License-Identifier: Apache-2.0
 * 
 * it under the terms of the Apache License, Version 2.0
 * as published by Sanghyun
 * 
 */

/**
 * 바닐라 자바스크립트로 TO DO LIST 구현
 * 
 * 1) 체크박스 클릭 로직
 *  - 빈 체크박스 클릭시 체크박스 체크
 *      - 체크박스 체크될 경우 할 일 부분에 줄 긋기   
 *  - 체크된 체크박스 클릭시 체크박스 체크 해제
 *      - 체크박스 체크 해제될 경우 할 일 부분에 줄 긋기 제거
 * 2) 삭제 버튼 클릭 로직
 *  - 삭제 버튼 클릭시 해당 할일 목록 삭제
 * 3) 추가 버튼 클릭 로직
 *  - 추가 버튼 클릭시 빈 할일 목록 추가
 * 4) 할일 목록 클릭 로직
 *  - 할일 목록 클릭시 해당 할일 목록 수정
 */

document.addEventListener("DOMContentLoaded", function() {
    const addToDoListButton = document.querySelector('.format-list-bulleted');
    const toDoContainer = document.querySelector('.desktop');

    console.log('To Do List App Loaded');

    addToDoListButton.addEventListener('click', function() {
    createToDoItem('할 일 내용');
    });

});

function createToDoItem(content) {

    const todoItem = document.createElement('div');
    todoItem.classList.add('todolist-undoe-line');

    // HTML 구조 생성
    todoItem.innerHTML = `
        <div class="overlap-group">
            <div class="todolist-contents">${content}</div>
            <img class="todolist-chkbutton" src="img/ToDoList_chkbutton_unchecked.png" />
            <img class="delete-forever" src="img/Delete_forever.png" />
        </div>
    `;

    toDoContainer.appendChild(todoItem);

    const extistingItems = document.querySelectorAll('.todolist-do-line, .todolist-undoe-line');
    const itemCount = extistingItems.length;

    const baseTop = 308;
    const itemHeight = 44;

    todoItem.style.position = 'absolute';
    todoItem.style.top = `${baseTop + ((itemCount - 1) * itemHeight)}px`;
    todoItem.style.left = '300px'; // 기존 항목과 동일한 왼쪽 위치
    
    console.log(`새 할 일 "${text}" 추가됨`);
}