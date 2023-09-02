import { insertLast } from './insert.js';
import { loadStorage } from '../utils/storage.js'

const keywordValue = (await loadStorage('keywords')) ?? [];

export function createReview({ name, month, date, menu, price, image, review }) {

  const template = /* html */ `
  <section>
  <h2 class="font-semibold leading-6">${month} 방문</h2>
  <div class="my-4 rounded-lg bg-white p-3">
    <div class="flex justify-between gap-1 pb-1">
      <span class="font-semibold whitespace-nowrap">${name} 연남점</span>
      <span class="pt-1 text-xs text-gray-400">${date.slice(3)}&middot;1번째 방문</span>
      <button class="pl-2">
        <img src="../assets/icon/icon-heart.svg" alt="하트" />
      </button>
      <button>
        <img src="../assets/icon/icon-more.svg" alt="더보기" />
      </button>
    </div>
    <div class="flex gap-4 text-xs text-lionContent">
      <div class="leading-5">
        <p class="line-clamp-2 h-[40px] w-[167px] text-ellipsis">${review}</p>
        <div class="mt-1">
          ${keywordValue.length > 0 ? `<button class="bg-lightGray700 rounded px-2 py-[2px]">${keywordValue[0]}</button>` : ''}
          ${keywordValue.length > 0 ? `<button class="bg-lightGray700 rounded px-1 py-[2px]">❤️+5</button>` : ''}
        </div>
      </div>
      <img src="../assets/images/${image.src}" alt="${image.alt}" class="h-[72px] w-[80px] rounded object-cover" />
    </div>
    <p class="text-xs text-gray-400">${menu} &middot; ${price}원</p>
    <button
      class="write-review justify-center-center ${
        keywordValue.length > 0 && review ? 'hidden' : ''
      } mt-5 inline-flex items-center rounded-lg bg-lionPrimary px-24 py-[4px] text-xs font-semibold leading-4 text-white hover:bg-lionSecondary"
      onclick="location.href = './visitLike.html'"
    >
      <img src="../assets/icon/icon-pencil.svg" alt="연필" class="mr-[5px] w-5" />
      리뷰쓰기
    </button>
  </div>
</section>
`;

  return template;
}



export async function renderReview(target, data) {
  insertLast(target, createReview(data));
}
