import {BaseCommandExecutor} from "../../../../core/classes/impl/executors/BaseCommandExecutor";
import {ChatMessageEvent} from "../../../../core/classes/impl/events/ChatMessageEvent";
import {Some} from "../../../../core/types/Some";
import {NamedCommand} from "../../../../core/annotations/routing/NamedCommand";
import {WithAlias} from "../../../../core/annotations/routing/WithAlias";
import {ButtonMessages, NicksMessage} from "../../../base/ButtonMessages";

@NamedCommand('banlist')
@WithAlias('банлист')
@WithAlias('списокбанов')
export class BanList extends BaseCommandExecutor {

    public override async execute(message: ChatMessageEvent): Some {
        const willSendMessage : NicksMessage = await ButtonMessages.getBanlist(message.chat, 1);
        await message.replyWithButtons(willSendMessage.message, ...willSendMessage.buttons)
    }

}